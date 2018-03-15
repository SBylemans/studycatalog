package com.jnj.honeur.studycatalog.service;

import com.jnj.honeur.studycatalog.model.*;
import com.jnj.honeur.studycatalog.repository.jpa.RoleRepository;
import com.jnj.honeur.studycatalog.repository.jpa.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.jnj.honeur.studycatalog.repository.jpa.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private UserRoleRepository userRoleRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public void createStudy(Study study) {
        Role r = new Role();
        r.setName(study.name);
        roleRepository.save(r);

        for(User u: study.collaborators){
            UserRole userRole = new UserRole();
            userRole.setUser(u);
            userRole.setRole(r);
            userRoleRepository.save(userRole);
        }

        UserRole userRole = new UserRole();
        userRole.setUser(study.initiator);
        userRole.setRole(r);
        userRoleRepository.save(userRole);
    }

    @Override
    public List<User> getAllUsersButCurrent(int id) {
        List<User> result = userRepository.findAll();
        result.removeIf(user -> user.getId() == id);
        return result;
    }

    @Override
    public User getUser(int id) {
        return userRepository.findOne(id);
    }

    @Override
    public List<User> getCollaborators(Study study, int id) {
        List<User> users = userRepository.findAll();
        List<User> toRemove = new ArrayList<>();
        for(User u : users){
            Set<UserRole> roles = u.getUserRoles();
            boolean hasRole = true;
            for(UserRole r: roles){
                if(!r.getRole().getName().equals(study.name) || u.getId() == id){
                    hasRole = false;
                }
            }
            if(!hasRole){
                toRemove.add(u);
            }
        }
        users.removeAll(toRemove);
        return users;
    }


}

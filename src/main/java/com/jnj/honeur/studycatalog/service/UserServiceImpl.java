package com.jnj.honeur.studycatalog.service;

import com.jnj.honeur.studycatalog.model.*;
import com.jnj.honeur.studycatalog.repository.jpa.RoleRepository;
import com.jnj.honeur.studycatalog.repository.jpa.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.jnj.honeur.studycatalog.repository.jpa.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser(int id) {
        return userRepository.findOne(id);
    }


}

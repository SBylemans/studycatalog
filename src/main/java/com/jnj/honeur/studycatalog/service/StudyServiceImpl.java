package com.jnj.honeur.studycatalog.service;

import com.jnj.honeur.studycatalog.model.Role;
import com.jnj.honeur.studycatalog.model.Study;
import com.jnj.honeur.studycatalog.model.User;
import com.jnj.honeur.studycatalog.model.UserRole;
import com.jnj.honeur.studycatalog.repository.mongo.StudyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudyServiceImpl implements StudyService {

    @Autowired
    private StudyRepository studyRepository;

    @Override
    public Study createStudy(Study study) {
        return studyRepository.save(study);
    }

    @Override
    public List<Study> getStudies(User user) {
        List<Study> studies = studyRepository.findAll();
        List<String> roles = new ArrayList<>();
        for(UserRole ur: user.getUserRoles()){
            roles.add(ur.getRole().getName());
        }
        return studies.stream().filter(study -> roles.contains(study.name)).collect(Collectors.toList());
    }
}

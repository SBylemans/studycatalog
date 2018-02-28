package com.jnj.honeur.studycatalog.service;

import com.jnj.honeur.studycatalog.model.Study;
import com.jnj.honeur.studycatalog.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface StudyService {
    public Study createStudy(Study study);
    public List<Study> getStudies(User user);
}

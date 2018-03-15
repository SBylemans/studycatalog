package com.jnj.honeur.studycatalog.service;

import com.jnj.honeur.studycatalog.model.Study;
import com.jnj.honeur.studycatalog.model.User;
import com.jnj.honeur.studycatalog.model.UserDetails;
import io.buji.pac4j.subject.Pac4jPrincipal;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    public void createStudy(Study study);
    public List<User> getAllUsersButCurrent(int id);
    public User getUser(int id);

    public List<User> getCollaborators(Study study, int id);
}

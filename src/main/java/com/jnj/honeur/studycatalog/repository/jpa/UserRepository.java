package com.jnj.honeur.studycatalog.repository.jpa;

import com.jnj.honeur.studycatalog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}

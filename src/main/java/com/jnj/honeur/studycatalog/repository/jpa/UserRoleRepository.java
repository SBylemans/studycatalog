package com.jnj.honeur.studycatalog.repository.jpa;

import com.jnj.honeur.studycatalog.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {
}

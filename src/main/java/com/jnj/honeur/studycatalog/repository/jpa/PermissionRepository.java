package com.jnj.honeur.studycatalog.repository.jpa;

import com.jnj.honeur.studycatalog.model.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface PermissionRepository extends JpaRepository<Permission, Integer> {
}

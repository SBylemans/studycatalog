package com.jnj.honeur.studycatalog.repository.mongo;

import com.jnj.honeur.studycatalog.model.Study;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyRepository extends MongoRepository<Study, String> {
}

package com.jnj.honeur.studycatalog.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@Document(collection = "study")
@TypeAlias("Study")
public class Study implements Serializable {
    @Id
    public String id;

    @TextIndexed
    @NotNull
    public String name;
    @TextIndexed
    public String reference;
    @TextIndexed
    @NotNull
    public String description;

    public User initiator;

    @Transient
    public List<User> collaborators;

    public String acknowledgements;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getInitiator() {
        return initiator;
    }

    public void setInitiator(User initiator) {
        this.initiator = initiator;
    }

    public List<User> getCollaborators() {
        return collaborators;
    }

    public void setCollaborators(List<User> collaborators) {
        this.collaborators = collaborators;
    }

    public String getAcknowledgements() {
        return acknowledgements;
    }

    public void setAcknowledgements(String acknowledgements) {
        this.acknowledgements = acknowledgements;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Study study = (Study) o;
        return Objects.equals(id, study.id) &&
                Objects.equals(name, study.name) &&
                Objects.equals(reference, study.reference) &&
                Objects.equals(description, study.description) &&
                Objects.equals(initiator, study.initiator) &&
                Objects.equals(collaborators, study.collaborators) &&
                Objects.equals(acknowledgements, study.acknowledgements);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, reference, description, initiator, collaborators, acknowledgements);
    }

    @Override
    public String toString() {
        return "Study{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", reference='" + reference + '\'' +
                ", description='" + description + '\'' +
                ", initiator=" + initiator +
                ", collaborators=" + collaborators +
                ", acknowledgements='" + acknowledgements + '\'' +
                '}';
    }
}

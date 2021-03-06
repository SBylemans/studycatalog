package com.jnj.honeur.studycatalog.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.io.Serializable;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

/**
 * Represents a user of the HONEUR platform
 * @author Peter Moorthamer
 */
@Entity
@Table(name="SEC_USER")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = User.class)
public class User implements Serializable {

    @Id
    @Column(name = "ID")
    @SequenceGenerator(name = "SEC_USER_SEQUENCE_GENERATOR", sequenceName = "SEC_USER_SEQUENCE", allocationSize = 1, initialValue = 1000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEC_USER_SEQUENCE_GENERATOR")
    private Integer id;

    @Column(name="LOGIN")
    private String login;

    @Column(name="NAME")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<UserRole> userRoles = new LinkedHashSet<>();

    @OneToMany
    @JoinColumn(name="USER_ID", foreignKey = @ForeignKey(name = "user_details_sec_user_id_fk"))
    private Set<UserDetails> userDetails = new LinkedHashSet<>();

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }
    public void setLogin(String login) {
        this.login = login;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }
    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

    public Set<UserDetails> getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(Set<UserDetails> userDetails) {
        this.userDetails = userDetails;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", login='" + login + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}

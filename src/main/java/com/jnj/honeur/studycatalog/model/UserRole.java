package com.jnj.honeur.studycatalog.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * Links a {@link Role} to a {@link User}
 *
 * @author Peter Moorthamer
 */
@Entity
@Table(name = "SEC_USER_ROLE")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = UserRole.class)
public class UserRole implements Serializable {

    private static final long serialVersionUID = 6257846375334314942L;

    @Id
    @Column(name = "ID")
    @SequenceGenerator(name = "SEC_USER_ROLE_SEQUENCE_GENERATOR", sequenceName = "SEC_USER_ROLE_SEQUENCE", allocationSize = 1, initialValue = 1004)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEC_USER_ROLE_SEQUENCE_GENERATOR")
    private Integer id;
    @Column(name = "STATUS")
    private String status;
    @ManyToOne
    @JoinColumn(name = "USER_ID", nullable = false)
    private User user;
    @ManyToOne
    @JoinColumn(name = "ROLE_ID", nullable = false)
    private Role role;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }
    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserRole userRole = (UserRole) o;
        return Objects.equals(id, userRole.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "UserRole{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", user=" + user +
                ", role=" + role +
                '}';
    }
}

package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Messenger {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "userN_id")
    private User userN;
    @ManyToOne
    @JoinColumn(name = "userG_id")
    private User userG;
    private String content;

    public Messenger(Long id, User userN, User userG, String content) {
        this.id = id;
        this.userN = userN;
        this.userG = userG;
        this.content = content;
    }

    public Messenger() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUserN() {
        return userN;
    }

    public void setUserN(User userN) {
        this.userN = userN;
    }

    public User getUserG() {
        return userG;
    }

    public void setUserG(User userG) {
        this.userG = userG;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}

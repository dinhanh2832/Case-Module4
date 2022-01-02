package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;
@Entity
public class HomeTime {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date date;
    @ManyToOne
    @JoinColumn(name = "home_id")
    private Home home;
    private String status;

    public HomeTime(Long id, Date date, Home home, String status) {
        this.id = id;
        this.date = date;
        this.home = home;
        this.status = status;
    }

    public HomeTime() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Home getHome() {
        return home;
    }

    public void setHome(Home home) {
        this.home = home;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

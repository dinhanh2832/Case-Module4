package com.example.demo.model;

import jdk.net.SocketFlow;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
public class HomeTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    @ManyToOne
    @JoinColumn(name = "home_id")
    private Home home;
    @ManyToOne
    @JoinColumn(name = "status_id")
    private StatusHome statusHome;

    public HomeTime(Date date, Home home, StatusHome statusHome) {
        this.date = date;
        this.home = home;
        this.statusHome = statusHome;
    }
}

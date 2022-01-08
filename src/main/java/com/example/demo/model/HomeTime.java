package com.example.demo.model;

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
    private String status;

    public HomeTime(Date date, Home home, String status) {
        this.date = date;
        this.home = home;
        this.status = status;
    }
}

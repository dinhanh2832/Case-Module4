package com.example.demo.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String links;
    private int Status;
    @ManyToOne
    @JoinColumn(name = "home_id")
    private Home home;

    public Image(String links, int status, Home home) {
        this.links = links;
        Status = status;
        this.home = home;
    }

    public Image(String links, int status) {
        this.links = links;
        Status = status;
    }
}

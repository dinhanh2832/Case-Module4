package com.example.demo.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Home {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    private int bedroom;
    private int showerRoom;
    private String description;
    private double price;
    @ManyToOne
    @JoinColumn(name = "status_id")
    private StatusHome statusHome;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @OneToMany(targetEntity = Image.class)
    @JoinColumn(name = "imgHome_id")
    private List<Image> imageList;
    private int numberOfTurns;

    public Home(String name, String address, Category category, int bedroom, int showerRoom, String description, double price, StatusHome statusHome, User user, List<Image> imageList, int numberOfTurns) {
        this.name = name;
        this.address = address;
        this.category = category;
        this.bedroom = bedroom;
        this.showerRoom = showerRoom;
        this.description = description;
        this.price = price;
        this.statusHome = statusHome;
        this.user = user;
        this.imageList = imageList;
        this.numberOfTurns = numberOfTurns;
    }
    private int area;
}

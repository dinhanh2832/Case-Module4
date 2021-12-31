package com.example.demo.model;

import javax.persistence.*;
import java.util.List;
@Entity
public class Home {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
    private String status;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @OneToMany(targetEntity = Image.class)
    private List<Image> imageList;

    public Home(Long id, String name, String address, Category category, int bedroom, int showerRoom, String description,
                double price, String status, User user, List<Image> imageList) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.category = category;
        this.bedroom = bedroom;
        this.showerRoom = showerRoom;
        this.description = description;
        this.price = price;
        this.status = status;
        this.user = user;
        this.imageList = imageList;
    }

    public Home() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public int getBedroom() {
        return bedroom;
    }

    public void setBedroom(int bedroom) {
        this.bedroom = bedroom;
    }

    public int getShowerRoom() {
        return showerRoom;
    }

    public void setShowerRoom(int showerRoom) {
        this.showerRoom = showerRoom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
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

    public List<Image> getImageList() {
        return imageList;
    }

    public void setImageList(List<Image> imageList) {
        this.imageList = imageList;
    }
}

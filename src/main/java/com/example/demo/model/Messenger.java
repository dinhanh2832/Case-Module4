package com.example.demo.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
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

}

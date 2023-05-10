import React from "react";
import styles from "./scrollbar.module.css";

export default function Scrollbar() {
  let users = [
    {
      profilepic:
        "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Pritesh Kumar , IIT Delhi",
      title: "CTO @ FunctionUp",
      experience: "9 years Experience",
    },
    {
      profilepic:
        "https://images.pexels.com/photos/3778863/pexels-photo-3778863.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Anubhav Singh , IIT Kanpur",
      title: "Co-Founder @ Dubdub.ai",
      experience: "7 years Experience",
    },
    {
      profilepic:
        "https://images.pexels.com/photos/14634935/pexels-photo-14634935.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Aviral Sharma , IIT Delhi",
      title: "Data Scientist Manager @ Optum",
      experience: "7 years Experience",
    },
    {
      profilepic:
        "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Rahul Garg , IIT Kanpur",
      title: "Co-Founder @ Dubdub.ai",
      experience: "7 years Experience",
    },
    {
      profilepic:
        "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Uddhav Bamba , IIT Dhanbad",
      title: "Applied Scientist @ Amazon",
      experience: "3 years Experience",
    },
    {
      profilepic:
        "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Anchal Jaiswal , IIT Kanpur",
      title: "Senior Data Scientist @ Tredence",
      experience: "7 years Experience",
    },
    {
      profilepic:
        "https://images.pexels.com/photos/4342098/pexels-photo-4342098.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Rahul Sankhwar , IIt Kanpur",
      title: "Senior Data Scientist @ ShareChat",
      experience: "6 years Experience",
    },
  ];

  return (
    <div className={styles.wrapper}>
      {users.map((item) => (
        <div className={styles.card}>
          <div className={styles.innerCard}>
            <img
              src={item.profilepic}
              alt="Profile Photo"
              className={styles.image}
            />
            <h2 className={styles.name}>{item.name}</h2>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.experience}>{item.experience}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import Router from "next/router";
import { useEffect, useState } from "react";
import { Review } from "../../Reviews/Review";
import { StageThumb } from "../../StageThumb/StageThumb";
import {
  UsersListTop,
  UsersListHeader,
  UsersListGrid,
  UsersListColName,
  UsersTableCard,
  UserInfo,
  UserAvatar,
  UserName,
  UserEmail,
  UsersListBottom,
  ReviewLimiter,
} from "./UsersTable.styled";

export const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://188.93.211.127:8000/api/get_reviews/?wash=2").then((data) => {
      data.json().then((res)=>{
        let list = [];
        for (let review of res) {
          list.push({
            ...review,
            image: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
          })
        }
        console.log(list);
        
        setUsers(list);
      })
    })

  }, []);

  return (
    <>
      <UsersListTop>
        <UsersListHeader>Отзывы клиентов</UsersListHeader>
      </UsersListTop>
      <UsersListGrid>
        <UsersListColName>Имя</UsersListColName>
        <UsersListColName>Cтатус</UsersListColName>
        <UsersListColName>Отзыв</UsersListColName>
        {users.map((user) => (
          <>
            <UsersTableCard onClick={() => Router.push("/form/1")}>
              <UsersListColName>
                <UserInfo>
                  <UserAvatar url={user.image} />
                  <div>
                    <UserName>{user.name?user.name:"Тимофей"}</UserName>
                    <UserEmail>{user.user.phone_number}</UserEmail>
                  </div>
                </UserInfo>
              </UsersListColName>
            </UsersTableCard>
            <UsersTableCard>
              <UsersListColName>{Review(user.rating)}</UsersListColName>
            </UsersTableCard>
            <UsersTableCard>
              <ReviewLimiter><UsersListColName>{user.text}</UsersListColName></ReviewLimiter>
            </UsersTableCard>
          </>
        ))}
      </UsersListGrid>
      <UsersListBottom />
    </>
  );
};

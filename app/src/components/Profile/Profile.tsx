import React from "react";
import { withAuth } from "../../hoc/withAuth";
import { Box, Image, Text } from "@chakra-ui/react";
import ProfileBackground from "../../assets/img/ProfileBackground.png";
import UserAvatar from "../../assets/img/avatars/avatar2.png";

import { UserService } from "../../services/User";

const userService = new UserService();

const getUserData = async () => {
  const r = await userService.getData();
  console.log(r);
  return r;
};

export const Profile: React.FC = withAuth(() => {
  const data = [
    { q: "Дата рождения", a: "10.08.1999" },
    {
      q: "Где ты живёшь (край/область, населённый пункт)? ",
      a: "Москва, Московская область",
    },
    {
      q: "Чем ты занимаешься (сфера деятельности, профессия, направление учёбы)?",
      a: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      q: "Опиши свой походный опыт",
      a: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece",
    },
    { q: "Какую самую дальнюю точку РФ ты посетил?", a: "Владивосток" },
  ];

  return (
    <>
      <Box
        style={{
          width: "100%",
          backgroundColor: "#4fd1c5",
          height: "260px",
          borderRadius: "26px",
          backgroundSize: "cover",
          display: "lex",
          flexWrap: "wrap",
        }}
        backgroundImage={ProfileBackground.src}
      >
        <Box>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "42px",
              margin: "20px 0 0 40px",
              paddingTop: "20px",
            }}
          >
            Анкета участника
          </Text>
        </Box>

        <Box
          style={{
            width: "95%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            height: "120px",
            borderRadius: "26px",
            margin: "115px auto -60px auto",
            boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.02)",
            display: "flex",
          }}
        >
          <Box padding={5}>
            <Box height="100%">
              <Box display="flex" height="100%">
                <Image
                  src={UserAvatar.src}
                  style={{ borderRadius: 10, height: "100%" }}
                />
                <Box style={{ margin: "auto auto auto 24px" }}>
                  <Box>
                    <Box fontWeight={"bold"}>Esthera Jackson</Box>
                  </Box>
                  <Box>
                    <Box fontWeight={"thin"}>esthera@simmmple.com</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box marginTop={140}>
        {data.map((x) => (
          <Box
            style={{
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "26px",
              boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.02)",
              marginBottom: 30,
              padding: 20,
            }}
          >
            <Box
              style={{ fontWeight: "bold", fontSize: "18px", marginBottom: 10 }}
            >
              {x.q}
            </Box>
            <Box>{x.a}</Box>
          </Box>
        ))}
      </Box>
    </>
  );
});

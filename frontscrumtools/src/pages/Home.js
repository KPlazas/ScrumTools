import { Fragment, useEffect, useState } from "react";
import { getAuthenticatedUser } from "../config/auth";
import { useTranslation } from "react-i18next";
import SCRUM from "./img/SCRUM.png";
import Value1 from "./img/value1.png";
import Value2 from "./img/value2.png";
import Value3 from "./img/value3.png";
import Value4 from "./img/value4.png";
import Layout from "./Layout";
function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const user = await getAuthenticatedUser();
      setUser(user);
    }
    getUser();
  }, []);
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Layout />
      <div className="container">
        <banner className="banner">
          <img src={SCRUM} />
        </banner>
        <br />
        <br />
        <br />

        <div
          class="container d-flex align-items-center justify-content-center"
          id="home"
          style={{
            background: "white",
            borderRadius: "3px",
            boxShadow: "0px 0px 0.8px 0px",
            fontFamily: "",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              marginTop: "40px",
              marginLeft: "80px",
              marginRight: "100px",
              marginBottom: "40px",
              textAlign: "justify",
            }}
          >
            <h1>{t("home.title")}</h1>
            <br />
            <p>
              {t("home.m1")}
              {t("home.m4")}{" "}
              <a
                href="#manifiesto"
                style={{
                  color: "#0c7499",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                {t("home.m5")}
              </a>{" "}
              {t("home.m6")}
              <br />
              <br />
              {t("home.m2")}
              <br />
              <br />
              {t("home.m3")}
            </p>

            <section id="manifiesto">
              <h1>{t("home.title3")}</h1>
              <br />
              <p>
                {t("home.t1")}
                <br />
                <br />
                <h4 style={{ fontWeight: "500", color: "black" }}>
                  <i class="bi bi-check2-all" style={{ color: "#0CCC20" }}>
                    {" "}
                  </i>
                  {t("home.title4")}
                </h4>
                <br />
                <div class="row" style={{ textAlign: "left" }}>
                  <div class="col-md-3">
                    <div class="card text-dark bg-light" id="cards">
                      <img src={Value1} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title" style={{ fontWeight: "600" }}>
                          {t("home.t2")}
                        </h5>
                        <p class="card-text">{t("home.t3")}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card text-dark bg-light" id="cards">
                      <img src={Value2} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title" style={{ fontWeight: "600" }}>
                          {t("home.t4")}
                        </h5>
                        <p class="card-text">{t("home.t5")}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card text-dark bg-light" id="cards">
                      <img src={Value3} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title" style={{ fontWeight: "600" }}>
                          {t("home.t6")}
                        </h5>
                        <p class="card-text">{t("home.t7")}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 ">
                    <div class="card text-dark bg-light" id="cards">
                      <img src={Value4} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title" style={{ fontWeight: "600" }}>
                          {t("home.t8")}
                        </h5>
                        <br />
                        <p class="card-text">{t("home.t9")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
              <br></br>
              <h4 style={{ fontWeight: "500", color: "black" }}>
                <i class="bi bi-check2-all" style={{ color: "#2A00FF" }}>
                  {" "}
                </i>
                {t("home.title5")}
              </h4>
              <p>
                <br />
                {t("home.p")}
                <br />
                <br />
                <ol class="styled-list">
                  <li>
                    <p>{t("home.p1")}</p>
                  </li>
                  <li>
                    <p>{t("home.p2")}</p>
                  </li>
                  <li>
                    <p>{t("home.p3")}</p>
                  </li>
                  <li>
                    <p>{t("home.p4")}</p>
                  </li>
                  <li>
                    <p>{t("home.p5")}</p>
                  </li>
                  <li>
                    <p>{t("home.p6")}</p>
                  </li>
                  <li>
                    <p>{t("home.p7")}</p>
                  </li>
                  <li>
                    <p>{t("home.p8")}</p>
                  </li>
                  <li>
                    <p>{t("home.p9")}</p>
                  </li>
                  <li>
                    <p>{t("home.p10")}</p>
                  </li>
                  <li>
                    <p>{t("home.p11")}</p>
                  </li>
                  <li>
                    <p>{t("home.p12")}</p>
                  </li>
                </ol>
                {t("home.p13")}
              </p>
            </section>

            <h1>{t("home.title2")}</h1>
            <br />
            <table>
              <tr>
                <th>{t("home.c1")}</th>
                <th>{t("home.c2")}</th>
                <th>{t("home.c3")}</th>
              </tr>
              <tr>
                <td>{t("home.c4")}</td>
                <td>{t("home.c5")}</td>
                <td>{t("home.c6")}</td>
              </tr>
              <tr>
                <td>{t("home.c7")}</td>
                <td>{t("home.c8")}</td>
                <td>{t("home.c9")}</td>
              </tr>
              <tr>
                <td>{t("home.c10")}</td>
                <td>{t("home.c11")}</td>
                <td>{t("home.c12")}</td>
              </tr>
              <tr>
                <td>{t("home.c13")}</td>
                <td>{t("home.c14")}</td>
                <td>{t("home.c15")}</td>
              </tr>
              <tr>
                <td>{t("home.c16")}</td>
                <td>{t("home.c17")}</td>
                <td>{t("home.c18")}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

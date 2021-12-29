/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";

import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";

import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";

import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava4 from "../assets/images/logo-spotify.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import card from "../assets/images/info-card-1.jpg";

function Home() {
  const { Title, Text } = Typography;

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const [reverse, setReverse] = useState(false);
 
  const count = [
    {
      title: "BNB",
    },
    {
      title: "ETH",
    },
    {
      title: "ADA",
    },
    {
      title: "USD",
    },
  ];

  const list = [
    {
      img: ava1,
      Title: "Soft UI Shopify Version",
      bud: "$14,000",
      progress: "1",
      member: "1",
    },
    {
      img: ava2,
      Title: "Progress Track",
      bud: "$3,000",
      progress: "1",
      member: "1"
    },
    {
      img: ava3,
      Title: "Fix Platform Errors",
      bud: "Not Set",
      progress: "1",
      member: "1",
    },
    {
      img: ava4,
      Title: "Launch new Mobile App",
      bud: "$20,600",
      progress: "1",
      member: "1"
    },
    {
      img: ava5,
      Title: "Add the New Landing Page",
      bud: "$4,000",
      progress: "1",
      member: "1",
    },

    {
      img: ava6,
      Title: "Redesign Online Store",
      bud: "$2,000",
      progress: "1",
      member: "1"
    },
  ];

  

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox mb-4 mx-4">
          {count.map((c, index) => (
           
              <Card bordered={false} className="criclebox" style={{marginRight:'10px',width: 'fit-content'}}>
                <div className="number">
                  {c.title}
                </div>
              </Card>
          ))}
        </Row>

        <Row>
            <Card bordered={false} className="criclebox cardbody h-full width-100">
              <div className="project-ant">
                <div>
                  <Title level={5}>Projects</Title>
                </div>
              </div>
              <div className="ant-list-box table-responsive">
                <table className="width-100">
                  <thead>
                    <tr>
                      <th>COIN</th>
                      <th>MIN. WITHDRAWEL</th>
                      <th>MAX. WITHDRAWEL</th>
                      <th>WITHDRAWEL FEE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=""
                              className="avatar-sm mr-10"
                            />{" "}
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.bud}{" "}
                          </span>
                        </td>
                        <td>
                          <div className="percent-progress">{d.progress}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
        </Row>
        </div>
    </>
  );
}

export default Home;

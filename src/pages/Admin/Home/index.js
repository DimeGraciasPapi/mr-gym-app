import { Spinner } from "reactstrap";
import { useData } from "../../../context/data";
import { Title } from "../../../styles/layout";
import { Container, Section, SectionTitle } from "./styles";
import { CartesianGrid, Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import { COLORS } from "../../../styles/colors";
import capitalize from "../../../helpers/capitalize";

function Home() {
  const { isGetting, members, plans } = useData();
  const date = new Date();
  const months = [ capitalize(date.toLocaleString("es-ES", { month: "long" })) ]

  for(let i = 1; i <= 2; i++){
    date.setMonth(date.getMonth() - 1);

    months.push(capitalize(date.toLocaleString("es-ES", { month: "long" })));
  }

  const dataMembers = months.reverse().map((month) => {
    const Miembros = members.filter((member) => {
      const date = new Date(member.createdAt);

      return date.toLocaleString("es-ES", { month: "long" }) === month.toLowerCase();
    }).length;

    return { month, Miembros };
  });

  const dataPlans = months.map((month) => {
    const membersWithPlan = members.filter((member) => member.plan.length >= 1 );
    const membersByMonth = membersWithPlan.filter((member) => {
      const date = new Date(member.createdAt);

      return date.toLocaleString("es-ES", { month: "long" }) === month.toLowerCase();
    });

    const Smart = membersByMonth.filter((member) => {
      const plan = plans.find((plan) => plan.id === member.plan[0]);

      return plan.name === "Smart";
    }).length;

    const Black = membersByMonth.filter((member) => {
      const plan = plans.find((plan) => plan.id === member.plan[0]);

      return plan.name === "Black"
    }).length;

    return { month, Smart, Black };
  });

  return (
    <>
      <Title>Inicio</Title>
      {
        isGetting
        ? <Spinner />
        : <Container>
            <Section>
              <SectionTitle>Miembros</SectionTitle>
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <AreaChart
                  data={dataMembers}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid 
                    strokeDasharray="3 3"
                    stroke={COLORS.white}
                  />
                  <XAxis 
                    dataKey="month"
                    stroke={COLORS.white}
                  />
                  <YAxis 
                    stroke={COLORS.white}
                  />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone"
                    dataKey="Miembros"
                    stroke={COLORS.orange}
                    fill={COLORS.orange}
                    fontWeight="700"
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Section>
            <Section>
              <SectionTitle>Planes contratados</SectionTitle>
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <AreaChart
                  data={dataPlans}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid 
                    strokeDasharray="3 3"
                    stroke={COLORS.white}
                  />
                  <XAxis 
                    dataKey="month"
                    stroke={COLORS.white}
                  />
                  <YAxis 
                    stroke={COLORS.white}
                  />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone"
                    dataKey="Smart"
                    stroke="#35FFDA"
                    fill="#35FFDA"
                    activeDot={{ r: 6 }}
                  />
                  <Area 
                    type="monotone"
                    dataKey="Black"
                    stroke="#FF2020"
                    fill="#FF2020"
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Section>
          </Container>
      }
    </>
  )
}

export default Home;

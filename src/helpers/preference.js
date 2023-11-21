import { post } from "../services";

async function getLinkToPay(plan, user) {
  try {
    const response =  await post("pay/preferences", {
      title: `Plan ${plan.name} x ${plan.remaining / 30} meses`,
      unit_price: plan.price,
      quantity: 1,
      id: plan.id,
      userId: user.id
    });
  
    return response.init_point;
  }catch(e) {
    console.error(e);
  }
}

export default getLinkToPay;

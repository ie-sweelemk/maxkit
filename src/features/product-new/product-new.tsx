import { Content, Typography, Divider, ActionFooter } from "shared/ui";
import { ProductWrapper } from "./product-new.styles";

const { Title } = Typography;

const ProductNew: React.FC = () => {
  return (
    <ProductWrapper>
      <Content>
        <Title level={4}>Input your new category</Title>
        <Divider />
        <div>Form</div>
      </Content>
      <ActionFooter
        lastUpdated="adasdasd"
        handleCancel={() => {
          console.log("cancel");
        }}
        handleOk={() => {
          console.log("ok");
        }}
      />
    </ProductWrapper>
  );
};

export default ProductNew;

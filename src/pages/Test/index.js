/*import React from "react";

const index = () => {
  return <div>test</div>;
};

export default index;
*/
import React from "react";
import DemoForm from "../../components/TestForm";

class Index extends React.Component {
  render() {
    let values = {
      name: "",
      email: "",
      age: 20,
    };
    return (
      <div className="app">
        <DemoForm values={values} handleSubmit={this.handleDemoFormSubmit} />
      </div>
    );
  }
  handleDemoFormSubmit = (values, setSubmitting) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };
}

export default Index;

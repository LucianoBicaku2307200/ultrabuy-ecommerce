import { Modal } from "../../components";

const ComponentsContainer = ({ children, title, id, ...rest }) => {
  return (
    <div className="mt-4">
      <div id={id} className="border-b border-black m-3 pb-1">
        <h1 className="font-medium text-lg my-2">{title}</h1>
        {children}
      </div>
    </div>
  );
};

const Link = ({ id, content }) => {
  return (
    <div>
      <a
        href={id}
        className="border bg-white text-C2-default px-3 py-1 rounded"
      >
        {content}
      </a>
    </div>
  );
};

const index = () => {
  return (
    <>
      <div className="mt-4">
        <ComponentsContainer title="Modals" id="modals">
          <Modal title="Bigus Dickus" />
        </ComponentsContainer>
      </div>
      <div className="bg-gray-400 fixed flex flex-wrap p-2 right-0 top-0 w-2/12 min-h-screen">
        <Link id="#modals" content="Modal" />
      </div>
    </>
  );
};

export default index;

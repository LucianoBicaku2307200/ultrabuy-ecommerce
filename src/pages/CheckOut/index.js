import {
  BillingInfo,
  Shipping,
  Payment,
  ConfirmStep,
  OrderSum,
} from "../../components";

const Index = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full h-max md:w-11/12 mx-auto">
      <div className="flex justify-center w-full lg:w-3/4 h-full pb-5">
        <div className="flex flex-col w-11/12">
          <div className="flex pt-1">
            <BillingInfo />
          </div>

          <div className="flex pt-5">
            <Shipping />
          </div>

          <div className="flex pt-5">
            <Payment />
          </div>

          {/* Additional Info */}
          <div className="flex pt-10">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-xl md:text-2xl pb-1 md:pb-2 w-full">
                Additional information
              </h2>
              <div className="flex flex-col sm:flex-row text-sm text-C1-C justify-between w-full">
                <h5>Need something else?</h5>
                <h5 className="py-2 sm:py-0">Step 4 of 5</h5>
              </div>
              <div className="flex w-full justify-center py-2">
                <textarea
                  className="w-full px-4 py-2 border border-C1-C rounded-lg focus:outline-none focus-within:border-C2-default text-gray-700 bg-gray-50 resize-none"
                  rows="4"
                  placeholder="Need a specific delivery day? Sending a gitf? Let us know ..."
                />
              </div>
            </div>
          </div>

          <ConfirmStep />
        </div>
      </div>

      {/* Order Summary */}
      <OrderSum />
    </div>
  );
};

export default Index;

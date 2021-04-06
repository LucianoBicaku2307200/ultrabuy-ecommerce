const Card = () => {
  return (
    <div className="inline-flex flex-col space-y-72 items-center justify-end pt-6 pb-4 bg-white shadow w-96 h-full">
      <div className="flex flex-col space-y-6 items-center justify-start">
        <div className="inline-flex space-x-32 items-center justify-end w-full h-10">
          <p className="text-2xl font-semibold text-gray-900">Shopping cart</p>
          <div className="flex space-x-1 items-center justify-start">
            <p className="text-xs text-gray-300">Close</p>
            <div className="flex items-center justify-center w-6 h-full p-1.5">
              <image
                className="flex-1 h-full rounded-full"
                src="https://via.placeholder.com/12.719999313354492x12.720002174377441"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 items-center justify-start">
          <div className="flex flex-col space-y-4 items-start justify-start">
            <div className="inline-flex space-x-4 items-center justify-end w-full h-40">
              <div className="inline-flex flex-col space-y-3 items-start justify-start">
                <div className="w-full h-16">
                  <div className="flex-1 h-full bg-gray-50 rounded-xl" />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-start">
                  <div className="inline-flex space-x-1.5 items-center justify-start">
                    <div className="flex items-center justify-center w-1/5 h-3/4 px-0.5 py-0.5">
                      <div className="w-3 h-2.5 bg-pink-900 bg-opacity-50 border rounded-full border-gray-900" />
                    </div>
                    <p className="text-xs text-gray-400">Wishlist</p>
                  </div>
                  <div className="inline-flex space-x-1.5 items-center justify-start">
                    <div className="flex items-center justify-center w-1/6 h-3/4 px-0.5 py-0.5">
                      <image
                        className="flex-1 h-full rounded-full"
                        src="https://via.placeholder.com/8.500001907348633x10.000001907348633"
                      />
                    </div>
                    <p className="text-xs text-gray-400">Compare</p>
                  </div>
                  <div className="inline-flex space-x-1.5 items-center justify-start">
                    <div className="flex items-center justify-center w-3 h-3/4 p-0.5">
                      <image
                        className="flex-1 h-full rounded-full"
                        src="https://via.placeholder.com/6.359999656677246x6.360001087188721"
                      />
                    </div>
                    <p className="text-xs text-gray-400">Remove</p>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col space-y-4 items-start justify-start w-64">
                <div className="w-full">
                  <div className="w-full">
                    <div className="flex flex-col space-y-2 items-start justify-start">
                      <div className="flex flex-col space-y-1 items-start justify-start">
                        <p className="w-full text-base font-medium text-gray-900">
                          Product title
                        </p>
                        <div className="flex flex-col space-y-1 items-center justify-end w-full h-10">
                          <div className="inline-flex space-x-10 items-center justify-start w-full h-5 pr-24 pb-0.5">
                            <p className="text-xs text-gray-400">Farm:</p>
                            <p className="text-xs text-gray-900">
                              Tharamis Farm
                            </p>
                          </div>
                          <div className="inline-flex space-x-3.5 items-center justify-start w-full h-5 pr-32 pb-0.5">
                            <p className="text-xs text-gray-400">Freshness:</p>
                            <p className="text-xs text-gray-900">1 day old</p>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex space-x-0.5 items-center justify-start">
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="flex-1 h-full bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="flex-1 h-full bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="flex-1 h-full bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="flex-1 h-full bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="w-3.5 h-3.5 bg-pink-900 bg-opacity-50 border rounded-full border-gray-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-64 h-11">
                  <image
                    className="inline-flex items-center justify-start w-52 h-11 pr-28 absolute left-0 top-0 rounded-lg"
                    src="https://via.placeholder.com/204x45"
                  >
                    <div className="inline-flex flex-col items-start justify-end flex-1 h-full">
                      <p className="text-lg font-semibold text-gray-500">
                        36.99 USD
                      </p>
                      <p className="text-xs font-semibold line-through text-gray-400">
                        48.56 USD
                      </p>
                    </div>
                  </image>
                  <div className="inline-flex space-x-1.5 items-center justify-start p-1.5 absolute right-0 top-0 bg-gray-50 border rounded-xl border-gray-300">
                    <p className="text-sm text-gray-50">1 pcs</p>
                    <div className="transform -rotate-90 w-5 h-0.5 border-gray-300" />
                    <div className="flex space-x-1 items-center justify-start">
                      <p className="text-xs font-semibold text-gray-900">Pcs</p>
                      <div className="flex items-center justify-center w-3 h-2/3 px-1 py-1">
                        <div className="w-1.5 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-0.5 border-gray-50" />
          </div>
          <div className="flex flex-col space-y-4 items-start justify-start">
            <div className="inline-flex space-x-4 items-center justify-end w-full h-40">
              <div className="inline-flex flex-col space-y-3 items-start justify-start">
                <div className="w-full h-16">
                  <div className="flex-1 h-full bg-gray-50 rounded-xl" />
                </div>
                <div className="flex flex-col space-y-2 items-start justify-start">
                  <div className="inline-flex space-x-1.5 items-center justify-start">
                    <div className="flex items-center justify-center w-1/5 h-3/4 px-0.5 py-0.5">
                      <div className="w-3 h-2.5 bg-pink-900 bg-opacity-50 border rounded-full border-gray-900" />
                    </div>
                    <p className="text-xs text-gray-400">Wishlist</p>
                  </div>
                  <div className="inline-flex space-x-1.5 items-center justify-start">
                    <div className="flex items-center justify-center w-1/6 h-3/4 px-0.5 py-0.5">
                      <image
                        className="flex-1 h-full rounded-full"
                        src="https://via.placeholder.com/8.500001907348633x10.000001907348633"
                      />
                    </div>
                    <p className="text-xs text-gray-400">Compare</p>
                  </div>
                  <div className="inline-flex space-x-1.5 items-center justify-start">
                    <div className="flex items-center justify-center w-3 h-3/4 p-0.5">
                      <image
                        className="flex-1 h-full rounded-full"
                        src="https://via.placeholder.com/6.359999656677246x6.360001087188721"
                      />
                    </div>
                    <p className="text-xs text-gray-400">Remove</p>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col space-y-4 items-start justify-start w-64">
                <div className="w-full">
                  <div className="w-full">
                    <div className="flex flex-col space-y-2 items-start justify-start">
                      <div className="flex flex-col space-y-1 items-start justify-start">
                        <p className="w-full text-base font-medium text-gray-900">
                          Product title
                        </p>
                        <div className="flex flex-col space-y-1 items-center justify-end w-full h-10">
                          <div className="inline-flex space-x-10 items-center justify-start w-full h-5 pr-24 pb-0.5">
                            <p className="text-xs text-gray-400">Farm:</p>
                            <p className="text-xs text-gray-900">
                              Tharamis Farm
                            </p>
                          </div>
                          <div className="inline-flex space-x-3.5 items-center justify-start w-full h-5 pr-32 pb-0.5">
                            <p className="text-xs text-gray-400">Freshness:</p>
                            <p className="text-xs text-gray-900">1 day old</p>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex space-x-0.5 items-center justify-start">
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="flex-1 h-full bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="flex-1 h-full bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="flex-1 h-full bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="flex-1 h-full bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                          <div className="w-3.5 h-3.5 bg-pink-900 bg-opacity-50 border rounded-full border-gray-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-64 h-11">
                  <image
                    className="inline-flex items-center justify-start w-52 h-11 pr-28 absolute left-0 top-0 rounded-lg"
                    src="https://via.placeholder.com/204x45"
                  >
                    <div className="inline-flex flex-col items-start justify-end flex-1 h-full">
                      <p className="text-lg font-semibold text-gray-500">
                        36.99 USD
                      </p>
                      <p className="text-xs font-semibold line-through text-gray-400">
                        48.56 USD
                      </p>
                    </div>
                  </image>
                  <div className="inline-flex space-x-1.5 items-center justify-start p-1.5 absolute right-0 top-0 bg-gray-50 border rounded-xl border-gray-300">
                    <p className="text-sm text-gray-50">1 pcs</p>
                    <div className="transform -rotate-90 w-5 h-0.5 border-gray-300" />
                    <div className="flex space-x-1 items-center justify-start">
                      <p className="text-xs font-semibold text-gray-900">Pcs</p>
                      <div className="flex items-center justify-center w-3 h-2/3 px-1 py-1">
                        <div className="w-1.5 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-0.5 border-gray-50" />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 items-center justify-end w-96 h-40">
        <div className="flex flex-col space-y-2 items-center justify-end w-32 h-16">
          <p className="text-xs font-semibold">Subtotal</p>
          <p className="text-2xl font-semibold text-gray-900">73.98 USD</p>
        </div>
        <div className="border-gray-200 w-96 h-px" />
        <div className="inline-flex space-x-16 items-center justify-end w-96 h-12">
          <div className="flex items-start justify-start h-12 py-1.5 bg-white rounded-xl">
            <p className="text-base font-bold text-gray-900">
              Continue shopping
            </p>
          </div>
          <div className="flex items-center justify-start h-full px-4 py-3 bg-gray-500 border-2 rounded-xl border-yellow-900">
            <p className="text-base font-bold text-white">Go to Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

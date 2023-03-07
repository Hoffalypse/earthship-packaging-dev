import React from "react";
import { Image } from "react-bootstrap";

const ShippingInfoScreen = () => {
  return (
    <div style={{ textAlign: "center" }} className="text-entry">
      <h2>Shipping</h2>
      <p>
        Our goal is to offer you the best shipping options, no matter where you
        live. Every day, we deliver to customers across the world, ensuring that
        we provide the very highest levels of responsiveness to you at all
        times.
      </p>
      <Image
        src="images/package.png"
        alt="Package Delivery"
        className="text-entry"
      ></Image>
       
      <p style={{marginTop:'25px', fontSize:'18px'}}><strong >The time frame for order delivery is divided into two parts:</strong></p>
      <ul>
        <li>
          Processing time: Order verification, tailoring, quality check and
          packaging. All orders are sent to the manufacturer for dispatch within
          12 hours after the order is placed. The manufacturer process the
          orders, which takes an additional 2–4 days.
        </li>
        <br />
        <li>
          Shipping time: This refers to the time it takes for items to be
          shipped from our warehouse to the destination.International delivery
          usually takes about 3-5 days.
        </li>
        <br />
        <li>Custom orders are non-refundable.</li>
        <br />
        <li>
          All orders US orders are shipped by DHL, UPS, USPS, FedEx or the least
          expensive carrier for that particular order. After processing and
          leaving the warehouse, items usually take between 3-15 days to arrive
          at their destination but occasionally takes longer. If you would like
          to inquire about about other options please call us (720)445-1189.
        </li>
        <br />
        <li>
          Earthship Packaging is not liable for delays or product seizures by
          U.S. Customs and Border Protection or any related government entity.{" "}
        </li>
        <br />
        <li>
          Earthship Packaging may, in its sole discretion, refuse or cancel any
          order and limit the quantity of any products sold on this site.
          Earthship Packaging may also require additional information prior to
          accepting or processing any order. Receipt of an order confirmation
          from Earthship Packaging does not signify our acceptance of an order,
          nor does it constitute confirmation of our offer to sell the products
          or services on this site. Receipt of written acceptance is simply a
          confirmation that Earthship Packaging has received your order.
          Earthship Packaging reserves the right, at any time, to accept or
          decline your order for any reason. If we cancel an order after you
          have already been billed and paid, Earthship Packaging will refund the
          billed amount.
        </li>
      </ul>
    </div>
  );
};

export default ShippingInfoScreen;

import { StyledFooter } from "./StyledComponents";

function HeaderAndFoorter() {
  return (
    <>
      <ul>
        <li>One way limit is 170 Km. (After 170 KM, Extra Charges)</li>
        <li>Sedan Rs.12/Km,Ertiga Rs,15/Km,Innova Rs.16/Km</li>
        <li>Innova Crysta Rs. 19/Km</li>
        <li>Toll-Tax & Parking Charges are Excluded.</li>
        <li>Additional Pickup & drop Charges will be Rs.300.</li>
        <li>
          There are no waiting charges up to the first 30 minutes. After 30Min.
          Waiting Charges will be RS.150 per hour.
        </li>
        <li>12 % GST is Applicable on Billing Amount.</li>
      </ul>

      <StyledFooter className="footer">
        Contact - Aniket Jagtap 9763823232 / 9049183232,
        uniquetravels3232@gmail.com
      </StyledFooter>
    </>
  );
}

export default HeaderAndFoorter;

import BookButton from "@/components/booking/BookButton";

export default function MobileBookingBar() {
  return (
    <div className="mbar">
      <BookButton style={{ flex: 1, boxShadow: "0 16px 30px -12px rgba(23,53,50,.6)" }} />
    </div>
  );
}

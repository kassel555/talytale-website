export default function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[570px] bg-secondary rounded-[40px] p-3 shadow-2xl animate-float">
      <div className="w-full h-full gradient-mobile rounded-[32px] relative overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-secondary rounded-b-[18px] z-10" />

        {/* App Grid */}
        <div className="pt-[50px] px-5 grid grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`w-[60px] h-[60px] bg-white/20 backdrop-blur-xl rounded-[14px] mx-auto animate-icon-pop stagger-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

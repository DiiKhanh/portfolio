
type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className='text-center pt-20 pb-10 sm:py-20'>
      <div className='relative inline-flex'>
        <span className='absolute inset-x-0 bottom-0 bg-gradient-to-r from-[#fbe2e3] to-[#dbd7fb] h-[21px]'></span>
        <h2 className='relative text-5xl font-bold text-black capitalize'>
          {children}
        </h2>
      </div>
    </div>
  );
}
const AnimatedCard = ({
  imgSrc,
  title,

  aboutProduct,
}: {
  imgSrc: string;
  title: string;

  aboutProduct: string;
}) => {
  return (
    <div className="md:w-60 border xl:w-60 xl:h-60  flex  rounded-2xl shadow-lg border-white dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-5 flex flex-col items-center  ">
        <img
          className="w-30 h-30 object-contain mb-4 xl:w-20"
          src={imgSrc}
          alt={`${title} logo`}
          
        />
        <div className="text-center space-y-1">
          <div className="text-2xl font-bold tracking-tight text-foreground ">{title}</div>

          <p className="text-sm text-muted-foreground mt-2">{aboutProduct}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;

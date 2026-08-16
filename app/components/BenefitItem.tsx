type BenefitItemProps = {
  title: string;
  description: string;
};

export default function BenefitItem({
  title,
  description,
}: BenefitItemProps) {
  return (
    <div className="group border-b border-white/10 py-8 transition-all duration-300 hover:border-amber-400/40">

      <div className="flex items-start gap-5">

        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition" />

        <div>

          <h3 className="text-white text-2xl font-light mb-3 tracking-wide">
            {title}
          </h3>

          <p className="text-zinc-400 leading-8 text-lg max-w-xl">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}
type ProductTagProps = {
  tag: string;
};

export function ProductTag({ tag }: ProductTagProps) {
  return (
    <span className="border border-primary/40 bg-primary/10 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-primary">
      {tag}
    </span>
  );
}

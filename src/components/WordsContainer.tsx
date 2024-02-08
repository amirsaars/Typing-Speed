function WordsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative whitespace-pre-wrap text-3xl max-w-xl leading-relaxed break-all mt-3'
  "
    >
      {children}
    </div>
  );
}

export default WordsContainer;

import Caret from "./Caret";
import Character from "./Character";

interface UserTypingsProps {
  userInput: string;
  words: string;
  className?: string;
}

function UserTypings({ userInput, className, words }: UserTypingsProps) {
  const typedCharacters = userInput.split("");
  return (
    <div className={className}>
      {typedCharacters.map((char, index) => (
        <Character
          actual={char}
          expected={words[index]}
          key={`${char}_${index}`}
        />
      ))}
      <Caret />
    </div>
  );
}

export default UserTypings;

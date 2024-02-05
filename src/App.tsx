import GeneratedWords from "./components/GeneratedWords";
import CountdownTimer from "./components/CountdownTimer";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import WordsContainer from "./components/WordsContainer";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

function App() {
  const { state, words, timeLeft, typed, errors, restart, totalTyped, WPM } =
    useEngine();
  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings
          words={words}
          className="absolute inset-0"
          userInput={typed}
        />
      </WordsContainer>
      <RestartButton
        className={`mx-auto mt-10 text-slate-500`}
        onRestart={restart}
      />
      <Results
        state={state}
        WPM={WPM}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
}

export default App;

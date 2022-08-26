import { useSpeechSynthesis } from "react-speech-kit";

const TalkButton = (props) => {
  const { speak } = useSpeechSynthesis();
  const handleOnClick = () => {
    speak({ text: props.text });
  };

  return (
    <button
      className="w-full px-4 py-2 text-white dark:text-gray-200 transition-colors duration-200 transform bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      onClick={() => {
        handleOnClick();
      }}
    >
      Talk
    </button>
  );
};

export default TalkButton;

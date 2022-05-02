function Demo() {
    const [isChecked, setIsChecked] = React.useState(
      false
    );
  
    const [playActive] = useSound(
      '/sounds/pop-down.mp3',
      { volume: 0.25 }
    );
    const [playOn] = useSound(
      '/sounds/pop-up-on.mp3',
      { volume: 0.25 }
    );
    const [playOff] = useSound(
      '/sounds/pop-up-off.mp3',
      { volume: 0.25 }
    );
  
    return (
      <Checkbox
        name="demo-checkbox"
        checked={isChecked}
        size={24}
        label="I agree to self-isolate"
        onChange={() => setIsChecked(!isChecked)}
        onMouseDown={playActive}
        onMouseUp={() => {
          isChecked ? playOff() : playOn();
        }}
      />
    );
  }
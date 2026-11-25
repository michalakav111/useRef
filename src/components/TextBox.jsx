

function TextBox({referent}) {
   

return(
  <input
        type="text"
        // value={inputValue}
        ref={referent}
        placeholder="Type something..."
      />
)
}

export default TextBox

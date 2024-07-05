const hashtag_regex = /\B#[a-zA-Z0-9_]+\b/

export default (hashtag) => {
    const splitHashtag = hashtag.split(" ");
    const lastWord = splitHashtag[splitHashtag.length - 1]

    if(hashtag_regex.test(lastWord)){
        return lastWord.match(hashtag_regex)[0]
    } 
}
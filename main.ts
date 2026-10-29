music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
game.onUpdate(function () {
    info.setScore(0)
})

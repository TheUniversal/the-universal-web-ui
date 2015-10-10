'use strict';

let hg = require('mercury');
let h = require('mercury').h;
let PlayPauseButton = require('./button/PlayPauseButton');
let ActionButton = require('./button/ActionButton');

function PlaybackControls() {
    return hg.state({
        playPauseButton: PlayPauseButton(),
        stopButton: ActionButton.playbackButton('stop', 'Stop'),
        previousButton: ActionButton.playbackButton('previous', 'Prev'),
        nextButton: ActionButton.playbackButton('next', 'Next')
    })
}

PlaybackControls.render = function (state) {
    return h('div.playback-controls', [
        PlayPauseButton.render(state.playPauseButton),
        ActionButton.render(state.stopButton),
        ActionButton.render(state.previousButton),
        ActionButton.render(state.nextButton)
    ])
};

module.exports = PlaybackControls;

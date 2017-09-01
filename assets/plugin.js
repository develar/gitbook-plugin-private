require(["gitbook"], (gitbook) => {
  gitbook.events.bind('start', function (e, config) {
    const githubURL = "/donate"

    gitbook.toolbar.createButton({
      label: 'Donate',
      position: 'right',
      onClick: function () {
        window.open(githubURL)
      }
    })
  })
})

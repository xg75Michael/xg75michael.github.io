(function () {
    document.addEventListener('DOMContentLoaded', function domloaded() {
        console.info('compass clock loading');

        const CIRCLER = 360;
        let compassCt = (function setCompassDial(s, ss, sm, sh, sd) {
            let _dial = document.querySelector(s);
            let _seconds = _dial.querySelectorAll(ss);
            let _minutes = _dial.querySelectorAll(sm);
            let _hours = _dial.querySelectorAll(sh);
            let _decorat = _dial.querySelectorAll(sd);
            let _space = 50;
            if (!!_dial) {
                [_seconds, _minutes, _hours, _decorat].forEach(function (g, gi) {
                    gi < 3 ?
                        g.forEach(function (e, i) {
                            e.style.transform = 'rotate(' + i * CIRCLER / g.length + 'deg) translateX(' + (200 - gi * _space) + 'px)';
                        }) :
                        g.forEach(function (e, i) {
                            e.style.transform = 'rotate(' + i * CIRCLER / g.length + 'deg) translateX(' + 240 + 'px)';
                        })
                });
            }
            return {
                container: _dial,
                seconds: _seconds,
                minutes: _minutes,
                hours: _hours,
            };
        })('.dial-container', '.dial-second span', '.dial-minute span', '.dial-hour span', '.dial-decoration span');
        console.info(compassCt);

        function handleRaf(t) {
            let nNow = new Date();
            let sR = -CIRCLER / compassCt.seconds.length * nNow.getSeconds();
            let mR = -CIRCLER / compassCt.minutes.length * nNow.getMinutes();
            let hR = -CIRCLER / compassCt.hours.length * (nNow.getHours() - 1);
            document.querySelector('.dial-second').style.transform = 'rotate(' + sR + 'deg)';
            document.querySelector('.dial-minute').style.transform = 'rotate(' + mR + 'deg)';
            document.querySelector('.dial-hour').style.transform = 'rotate(' + hR + 'deg)';
            requestAnimationFrame(handleRaf);
        }
        requestAnimationFrame(handleRaf);
    });
})();
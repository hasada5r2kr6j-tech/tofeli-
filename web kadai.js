
    
    function updateClock() {
      const now = new Date();

     const zones = [
    { id: "tokyo",        label: "東京",           timeZone: "Asia/Tokyo" },
    { id: "london",       label: "ロンドン",       timeZone: "Europe/London" },
    { id: "newyork",      label: "ニューヨーク",   timeZone: "America/New_York" },
    { id: "losangeles",   label: "ロサンゼルス",   timeZone: "America/Los_Angeles" },
    { id: "utc",          label: "世界標準時 (UTC)", timeZone: "UTC" },
    { id: "india",        label: "インド",         timeZone: "Asia/Kolkata" }
  ];

  zones.forEach(zone => {
    const time = now.toLocaleString("ja-JP", {
      timeZone: zone.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    document.getElementById(zone.id).textContent =
      `${zone.label} 
      ${time}`;
  });


    }

    // 初回表示
    updateClock();

    // 1秒ごとに更新
    setInterval(updateClock, 1000);


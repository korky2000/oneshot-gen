function capFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        function generateName() {
            var syl1 = [
                "Dragon", "Wolf", "Tree", "Forest", "Lake", "Mountain", "Ocean", "Shell", "Wave", "Brook", "North", "South", "East", "West","Left","Right","Brooks","Stream","Hills"
            ];
            var syl2 = [
                "brook", "mountain", "mill", "runn", "glenn", "hill", "port", "arden", "city","vill","ton","town","glade"
            ];

            var name = capFirst(syl1[getRandomInt(0, syl1.length)]) + (syl2[getRandomInt(0, syl2.length)]);
            document.getElementById("random_name").innerHTML = name;
        }
        function generateSize() {
            var eye = ["small", "medium", "large"];
            var size = ["town", "city", "hamlet", "port"];
            var name = (eye[getRandomInt(0, eye.length)]) + " " + (size[getRandomInt(0, size.length)]);
            document.getElementById("random_eye").innerHTML = name;

        }

        function generateTemple() {
            var eye = ["Temple of ", "Statue of ", "Sanctuary of ", "Church of ",];
            var size = ["Pasir", "Reon", "The Knowing Mistress", "The Dawn Father", "The Lord of Seas", "The Father of Death", "The Wild Mother", "Habit", "Oper", "The Lord of Light", "The Prince of Seas"];
            var first1 = [
                "al",
                "am",
                "gar",
                "bae",
                "bru",
                "Tho",
                "Tor",
                "Har",
                "Aud",
                "kris",
                "mar",
                "Stra",
                "kat",
                "ild",
                "san",
                "hel",
                "bar",
                "da",
                "dar",
                "tra",
                "tak"
            ];
            var first2 = [
                "in",
                "en",
                "er",
                "ild",
                "de",
                "tra",
                "era",
                "wyn",
                "vil",
                "err",
                "vok",
                "il",
                "eim",
                "sword",
                "heim",
                "runn",
                "gher",
                "ryd",
                "erk",
                "ehr",
                "eln"
            ];
            var last1 =
                [
                    "iron",
                    "steel",
                    "fire",
                    "bone",
                    "hill",
                    "ember",
                    "bald",
                    "battle",
                    "frost",
                    "gold",
                    "emerald",
                    "tor",
                    "brawn",
                    "sword",
                    "might",
                    "power",
                    "strength",
                    "heavy",
                    "snake",
                    "rum",
                    "whiskey"
                ];
            var last2 = [
                "hammer",
                "stone",
                "forge",
                "fire",
                "fight",
                "beard",
                "red",
                "blue",
                "black",
                "den",
                "erk",
                "ehr",
                "unn",
                "anvil",
                "vil",
                "mace",
                "fist",
                "arm",
                "leg",
                "might",
                "end"
            ];
            var race = ["an Elven", "a Half-Elf", "an Orc", "a Human", "a Tiefling", "a dwarf", "a gnome"];
            var holy = ["Cleric", "Paladin", "Priest"];
            var bar1 = ["magic", "drunken", "tired", "angry", "small", "big", "sad", "tragic", "hungry", "greedy", "noble", "poor", "happy", "lazy", "loud", "cunning", "crafty", "cool", "brass", "silver"]
            var bar2 = ["hammer", "wolf", "dog", "pig", "rooster", "fool", "king", "horse", "lobster", "ghoul", "ghost", "goblin", "parrot", "thief", "snake", "hero", "crab", "wizard", "bard", "cat"]
            var temple = (eye[getRandomInt(0, eye.length)]) + " " + (size[getRandomInt(0, size.length)]) + ":" + " " + "led by " + capFirst(first1[getRandomInt(0, first1.length)]) + (first2[getRandomInt(0, first2.length)]) + " " + capFirst(last1[getRandomInt(0, last1.length)]) + (last2[getRandomInt(0, last2.length)]) + ", " + (race[getRandomInt(0, race.length)]) + " " + "a " + (holy[getRandomInt(0, holy.length)]);
            document.getElementById("temple").innerHTML = temple;
            var tavern = capFirst(bar1[getRandomInt(0, bar1.length)]) + " " + (bar2[getRandomInt(0, bar2.length)]) + ":" + " " + "the bar is kept by " + capFirst(first1[getRandomInt(0, first1.length)]) + (first2[getRandomInt(0, first2.length)]) + " " + capFirst(last1[getRandomInt(0, last1.length)]) + (last2[getRandomInt(0, last2.length)]) + ", " + (race[getRandomInt(0, race.length)]) + " " + "a " + (holy[getRandomInt(0, holy.length)]);
            document.getElementById("tavern").innerHTML = tavern;
            var shop = (eye[getRandomInt(0, eye.length)]) + " " + (size[getRandomInt(0, size.length)]) + ":" + " " + "led by " + capFirst(first1[getRandomInt(0, first1.length)]) + (first2[getRandomInt(0, first2.length)]) + " " + capFirst(last1[getRandomInt(0, last1.length)]) + (last2[getRandomInt(0, last2.length)]) + ", " + (race[getRandomInt(0, race.length)]) + " " + "a " + (holy[getRandomInt(0, holy.length)]);
            document.getElementById("shop").innerHTML = shop;
            var title = ["Mayor", "Duke", "Archduke", "Bishop", "Governor", "Chief", "Council Person"];
            var leader = capFirst(title[getRandomInt(0, title.length)]) + " " + capFirst(first1[getRandomInt(0, first1.length)]) + (first2[getRandomInt(0, first2.length)]) + " " + capFirst(last1[getRandomInt(0, last1.length)]) + (last2[getRandomInt(0, last2.length)]);
            document.getElementById("leader").innerHTML = leader;

        }

        function generateProfession() {
        // var prof = (professions[getRandomInt(0, professions.length)]); document.getElementById("prof").innerHTML = prof;



    }
        function generateNPC() {
            var first3 = [
                "al",
                "am",
                "gar",
                "bae",
                "bru",
                "Tho",
                "Tor",
                "Har",
                "Aud",
                "kris",
                "mar",
                "Stra",
                "kat",
                "ild",
                "san",
                "hel",
                "bar",
                "da",
                "dar",
                "tra",
                "tak"
            ];
            var first4 = [
                "in",
                "en",
                "er",
                "ild",
                "de",
                "tra",
                "era",
                "wyn",
                "vil",
                "err",
                "vok",
                "il",
                "eim",
                "sword",
                "heim",
                "runn",
                "gher",
                "ryd",
                "erk",
                "ehr",
                "eln"
            ];
            var last3 =
                [
                    "iron",
                    "steel",
                    "fire",
                    "bone",
                    "hill",
                    "ember",
                    "bald",
                    "battle",
                    "frost",
                    "gold",
                    "emerald",
                    "tor",
                    "brawn",
                    "sword",
                    "might",
                    "power",
                    "strength",
                    "heavy",
                    "snake",
                    "rum",
                    "whiskey"
                ];
            var last4 = [
                "hammer",
                "stone",
                "forge",
                "fire",
                "fight",
                "beard",
                "red",
                "blue",
                "black",
                "den",
                "erk",
                "ehr",
                "unn",
                "anvil",
                "vil",
                "mace",
                "fist",
                "arm",
                "leg",
                "might",
                "end"
            ];
            var gods = ["Pasir", "Reon", "The Knowing Mistress", "The Dawn Father", "The Lord of Seas", "The Father of Death", "The Wild Mother", "Habit", "Oper", "The Lord of Light", "The Prince of Seas"];
            let paladin = "paladins of ";
            let result = paladin.concat(gods[getRandomInt(0, gods.length)]);
            let follow = "followers of ";
            let result2 = follow.concat(gods[getRandomInt(0, gods.length)]);
            let symbol1 = "a symbol of ";
            let symbol = symbol1.concat(gods[getRandomInt(0, gods.length)]);
            var pronoun = ["She is ", "He is ", "They are "];
            var verb = ["searching for", "looking for", "hunting", "avoiding", "being hunted by"];
            var professions = [result, "Animal Handler", "Arborist", "Baler", "Beekeeper", "Milk maid", "Shepard", "Farmer", "Fisherman", "Forgaer", "Forester", "Horse Trainer", "Architect", "Roofer", "Stonemason", "Acrobat", "Artist", "Bard", "Chef", "Actor", "Tax Collector", "Book Keeper", "librarian", "Banker", "Soldier", "Guard", "Messenger", "Armorer", "Blacksmith", "Shop Keeper", "Tailor", "Cobbler", "Drug Dealer", "Bandit", "Assassin", "Bruglar", "Pirate", "Baker", "Butcher", "Clerk", "Cook", "Barkeep", "Grave Digger", "Maid", "Pastry Chef", "Nanny", "Sage", "Paladin", "Priest", "Acolyte", "Cleric"]
            var race2 = ["an Elven", "a Half-Elf", "an Orc", "a Human", "a Tiefling", "a dwarf", "a gnome"];

            var noun = [result, "an angry god", "the people who killed their family", "a prescious family heirloom", "a cure for a disease", "a former lover", "giants", "thieves", symbol, "family", "dead family", result2];
            var npc = capFirst(first3[getRandomInt(0, first3.length)]) + (first4[getRandomInt(0, first4.length)]) + " " + capFirst(last3[getRandomInt(0, last3.length)]) + (last4[getRandomInt(0, last4.length)]) + ", " + (race2[getRandomInt(0, race2.length)]) + " " + (professions[getRandomInt(0, professions.length)]);
            document.getElementById("npc").innerHTML = npc;
            var npc2 = capFirst(first3[getRandomInt(0, first3.length)]) + (first4[getRandomInt(0, first4.length)]) + " " + capFirst(last3[getRandomInt(0, last3.length)]) + (last4[getRandomInt(0, last4.length)]) + ", " + (race2[getRandomInt(0, race2.length)]) + " " + (professions[getRandomInt(0, professions.length)]);
            document.getElementById("npc2").innerHTML = npc2;
            var npc3 = capFirst(first3[getRandomInt(0, first3.length)]) + (first4[getRandomInt(0, first4.length)]) + " " + capFirst(last3[getRandomInt(0, last3.length)]) + (last4[getRandomInt(0, last4.length)]) + ", " + (race2[getRandomInt(0, race2.length)]) + " " + (professions[getRandomInt(0, professions.length)]);
            document.getElementById("npc3").innerHTML = npc3;


        }
        function generateQuest() {
            var race = ["Elf", "Human", "Dwarf", "Gnome", "Tiefling", "Orc", "Half-Elf"];
            var syl1 = [
                "al",
                "am",
                "gar",
                "bae",
                "bru",
                "Tho",
                "Tor",
                "Har",
                "Aud",
                "kris",
                "mar",
                "Stra",
                "kat",
                "ild",
                "san",
                "hel",
                "bar",
                "da",
                "dar",
                "tra",
                "tak",
                "vay", "dor", "tra", "tor", "mir", "ven", "en", "ron", "kea", "cra", "hol", "mag", "vir", "luc", "sar", "pas", "rel", "gre", "hol", "cir",
                "van", "ren", "tor", "al", "en", "dor", "in", "ra", "tra", "na", "an", "ros", "ur", "in", "ir", "kas", "im", "ar", "or", "al",
            ];
            var syl2 = [
                "in",
                "en",
                "er",
                "ild",
                "de",
                "tra",
                "era",
                "wyn",
                "vil",
                "err",
                "vok",
                "il",
                "eim",
                "sword",
                "heim",
                "runn",
                "gher",
                "ryd",
                "erk",
                "ehr",
                "eln",
                "ro", "za", "ir", "th", "ax", "ph", "sh", "et", "ak", "al", "no", "hi", "em", "es", "um", "rl", "men", "le", "ri", "sa"
            ];
            var last1 =
                [
                    "iron",
                    "steel",
                    "fire",
                    "bone",
                    "hill",
                    "ember",
                    "bald",
                    "battle",
                    "frost",
                    "gold",
                    "emerald",
                    "tor",
                    "brawn",
                    "sword",
                    "might",
                    "power",
                    "strength",
                    "heavy",
                    "snake",
                    "rum",
                    "whiskey",
                    "dusk", "light", "silver", "gold", "dark", "night", "green", "brown", "lunar", "mind", "fir", "oak", "blue", "fog", "winter", "summer", "autumn", "spring", "wild", "star"
                ];
            var last2 = [
                "hammer",
                "stone",
                "forge",
                "fire",
                "fight",
                "beard",
                "red",
                "blue",
                "black",
                "den",
                "erk",
                "ehr",
                "unn",
                "anvil",
                "vil",
                "mace",
                "fist",
                "arm",
                "leg",
                "might",
                "end",
                "brook", "pride", "seeker", "weild", "ann", "ill", "bell", "dream", "burth", "walker", "whisper", "bloom", "blossom", "shard", "guard", "rint", "ant", "petal", "fate", "heel"
            ];

            var verb = ["looking for", "hunting", "escaping", "hiding from", "traveling to", "seeking"];
            var noun = ["a family heirloom", "fine fabrics", "materials for a project", "dragons", "a cure for a disease", "fame and fortune", "a new career", "an artisan", "a lost family member", "a lost hero", "a friend"]
            var need = ["assistance", "protection", "adventurers", "help", "hired help", "professionals", "thieves", "criminals"];
            var goal = ["acompany", "join", "to be hired by", "travel with", "help"];
            var pronouns = ["her", "him", "them"];
            var where = ["in", "from"];
            var place = ["Tothark", "Ekva", "Triand", "Delta", "Mt.Port", "La Push", "Shell City", "Forks,Washington", "Prayton", "Lucidad", "Oxathe", "Graceland 2", "Bearglenn", "Tyrite", "Torrund", "Wolfcity", "Grayfield"]
            var random_quest = "A" + " " + capFirst(race[getRandomInt(0, race.length)]) + " " + "named " + capFirst(syl1[getRandomInt(0, syl1.length)]) + (syl2[getRandomInt(0, syl2.length)]) + " " + capFirst(last1[getRandomInt(0, last1.length)]) + (last2[getRandomInt(0, last2.length)]) + " is " + (verb[getRandomInt(0, verb.length)]) + " " + (noun[getRandomInt(0, noun.length)]) + " " + (where[getRandomInt(0, where.length)]) + " " + (place[getRandomInt(0, place.length)]) + " and needs " + (need[getRandomInt(0, need.length)]) + " to " + (goal[getRandomInt(0, goal.length)]) + " " + (pronouns[getRandomInt(0, pronouns.length)]);
            document.getElementById("random_quest").innerHTML = random_quest;
        }
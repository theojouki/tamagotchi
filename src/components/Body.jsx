import './Body.css'
import { useState, useEffect } from "react"

function Body() {
    const [vida, setVida] = useState(9)
    const [sanidade, setSanidade] = useState(8)
    const [esforco, setEsforco] = useState(2)
    const [vidamax, setVidamax] = useState(9)
    const [sanidademax, setSanidademax] = useState(8)
    const [esforcomax, setEsforcomax] = useState(2)
    const [forca, setForca] = useState(1)
    const [agilidade, setAgilidade] = useState(1)
    const [vigor, setVigor] = useState(1)
    const [intelecto, setIntelecto] = useState(1)
    const [presenca, setPresenca] = useState(1)
    const [dinheiro, setDinheiro] = useState(80)
    const [seconds, setSeconds] = useState(60)
    const [nivel, setNivel] = useState(2)
    const [classe, setClasse] = useState(null)

    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds(prev => prev - 1)
      }, 1000)
    
      return () => clearInterval(timer)
    }, [])
    
    useEffect(() => {
      if (seconds === 0) {
        const evento = eventosAleatorios[Math.floor(Math.random() * eventosAleatorios.length)]
        evento()
        setNivel(n => n + 1)
        setSeconds(60)
      }
    }, [seconds]
  )

    const aumentarForca = () => {
      if (forca >= 5) {
        alert('Força já está no nível máximo!')
        return
      }
      if (dinheiro >= 20) {
        setForca(prev => prev + 1)
        setDinheiro(prev => prev - 20)
      } else {
        alert('Você não tem dinheiro o suficiente')
      }
    }
    
    const aumentarAgilidade = () => {
      if (agilidade >= 5) {
        alert('Agilidade já está no nível máximo!')
        return
      }
      if (dinheiro >= 20) {
        setAgilidade(prev => prev + 1)
        setDinheiro(prev => prev - 20)
      } else {
        alert('Você não tem dinheiro o suficiente')
      }
    }
    
    const aumentarIntelecto = () => {
      if (intelecto >= 5) {
        alert('Intelecto já está no nível máximo!')
        return
      }
      if (dinheiro >= 20) {
        setIntelecto(prev => prev + 1)
        setDinheiro(prev => prev - 20)
      } else {
        alert('Você não tem dinheiro o suficiente')
      }
    }
    
    const aumentarPresenca = () => {
      if (presenca >= 5) {
        alert('Presença já está no nível máximo!')
        return
      }
      if (dinheiro >= 20) {
        setPresenca(prev => prev + 1)
        setEsforco(prev => Math.min(prev + 1, esforcomax + 1))
        setEsforcomax(prev => prev + 1)
        setDinheiro(prev => prev - 20)
      } else {
        alert('Você não tem dinheiro o suficiente')
      }
    }
    
    const aumentarVigor = () => {
      if (vigor >= 5) {
        alert('Vigor já está no nível máximo!')
        return
      }
      if (dinheiro >= 20) {
        setVigor(prev => prev + 1)
        setVida(prev => Math.min(prev + 1, vidamax + 1))
        setVidamax(prev => prev + 1)
        setDinheiro(prev => prev - 20)
      } else {
        alert('Você não tem dinheiro o suficiente')
      }
    }

    const eventosAleatorios = [

      () => {
        alert('Você foi atacado por um Zumbi de Sangue! -8 de vida e -7 de sanidade.')
        setVida(prev => Math.max(prev - 8, 0))
        setSanidade(prev => Math.max(prev - 7, 0))
      },
      () => {
        alert('Você tropeçou e bateu a cabeça no chão. Que idiota! -3 de vida.')
        setVida(prev => Math.max(prev - 3, 0))
      },
      () => {
        alert('Você se assustou com um monstro terrível!... Era só um manequim, estúpido. -3 de sanidade.')
        setSanidade(prev => Math.max(prev - 3, 0))
      },
      () => {
        alert('Você é tratado na enfermaria da Ordem, ficando novo em folha para mais uma missão. +8 de vida, +7 de sanidade e +1 de esforço')
        setVida(prev => Math.min(prev + 8, vidamax))
        setSanidade(prev => Math.min(prev + 7, sanidademax))
        setEsforco(prev => Math.min(prev + 1, esforcomax))
      },
      () => {
        alert('Você encontra um cicatrizante perdido nas suas coisas. Que conveniente! +3 de vida.')
        setVida(prev => Math.min(prev + 3, vidamax))
      },
      () => {
        alert('Você acha um calmante extremamente suspeito no chão. Você toma, o que poderia dar de errado? +3 de sanidade.')
        setSanidade(prev => Math.min(prev + 3, sanidademax))
      },
      () => {
        alert('Você joga um pouco de Garfield Kart depois de um dia longo na Ordem. +2 de esforço.')
        setEsforco(prev => Math.min(prev + 2, esforcomax))
      },
      () => {
        alert('Você encontra uma moeda na sala de pesquisa. Você pega e sai de fininho. +1 de dinheiro.')
        setDinheiro(prev => prev + 1)
      },
      () => {
        alert('Você recebe o seu pagamento depois de uma missão complicada. Eba! +5 de dinheiro.')
        setDinheiro(prev => prev + 5)
      },
      () => {
        alert('Uma nota de dinheiro cai do bolso, provavelmente deixando alguém feliz hoje... -1 de dinheiro.')
        setSanidade(prev => Math.max(prev - 1, 0))
      },
      () => {
        alert('Uma entidade de Energia invade seu celular e hackeia sua conta bancária. Maldito Anfitrião! -5 de dinheiro.')
        setDinheiro(prev => Math.max(prev - 5, 0))
      },

    ]

    const escolherClasse = (classeEscolhida) => {
      setClasse(classeEscolhida)
    
      switch (classeEscolhida) {
        case 'Combatente':
          setVidamax(prev => prev + 12)
          setSanidademax(prev => prev + 4)
          setEsforcomax(prev => prev + 1)
          setVida(prev => Math.min(prev + 12, vidamax + 12))
          setSanidade(prev => Math.min(prev + 4, sanidademax + 4))
          setEsforco(prev => Math.min(prev + 1, esforcomax + 1))
          break
    
        case 'Especialista':
          setVidamax(prev => prev + 8)
          setSanidademax(prev => prev + 8)
          setEsforcomax(prev => prev + 2)
          setVida(prev => Math.min(prev + 8, vidamax + 8))
          setSanidade(prev => Math.min(prev + 8, sanidademax + 8))
          setEsforco(prev => Math.min(prev + 2, esforcomax + 2))
          break
    
        case 'Ocultista':
          setVidamax(prev => prev + 4)
          setSanidademax(prev => prev + 12)
          setEsforcomax(prev => prev + 3)
          setVida(prev => Math.min(prev + 4, vidamax + 4))
          setSanidade(prev => Math.min(prev + 12, sanidademax + 12))
          setEsforco(prev => Math.min(prev + 3, esforcomax + 3))
          break
    
        default:
          break
      }
    }

  return (
    <div className='body-container'>
    <div className="center-panel">
      <img className='agathinha' src="public/agathinha.png" alt="Agathinha" />
      <h1 className='text-level'>Nível: {nivel}</h1>
      <h1 className='text-attribute'>Força: {forca}</h1>
      <h1 className='text-attribute'>Agilidade: {agilidade}</h1>
      <h1 className='text-attribute'>Intelecto: {intelecto}</h1>
      <h1 className='text-attribute'>Presença: {presenca}</h1>
      <h1 className='text-attribute'>Vigor: {vigor}</h1>
      <h1 className='text-health'>Vida: {vida}/{vidamax}</h1>
      <h1 className='text-sanity'>Sanidade: {sanidade}/{sanidademax}</h1>
      <h1 className='text-effort'>Esforço: {esforco}/{esforcomax}</h1>
      <h1 className='text-money'>Dinheiro: {dinheiro}</h1>
      <h1 className='text-class'>Classe: {classe}</h1>
      <h1 className='text-timer'>Tempo para o próximo evento: {seconds}</h1>
    </div>
  
    <div className='side-panel'>
    <div className='skill-shop'>
      <h2 className='text-attribute'>Aumento de Atributo</h2>
      <ul>
        <li onClick={aumentarForca}>🔥 Aumentar +1 de Força (-20 dinheiro)</li>
        <li onClick={aumentarAgilidade}>⚡ Aumentar +1 de Agilidade (-20 dinheiro)</li>
        <li onClick={aumentarIntelecto}>🧠 Aumentar +1 de Intelecto (-20 dinheiro)</li>
        <li onClick={aumentarPresenca}>💬 Aumentar +1 de Presença (-20 dinheiro)</li>
        <li onClick={aumentarVigor}>💪 Aumentar +1 de Vigor (-20 dinheiro)</li>
      </ul>
    </div>
    
    {nivel >= 2 && !classe && (
  <div className="escolha-classe">
    <h2>Escolha sua classe:</h2>
    <button onClick={() => escolherClasse('Combatente')}>⚔️ Combatente</button>
    <button onClick={() => escolherClasse('Especialista')}>🕵️ Especialista</button>
    <button onClick={() => escolherClasse('Ocultista')}>📖 Ocultista</button>
  </div>
)}
  </div>
  </div>
)}

export default Body